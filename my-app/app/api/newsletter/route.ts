// app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    const { email, name, company, subscriberType } = await req.json()

    if (!email || !subscriberType) {
      return NextResponse.json(
        { error: 'Email and subscriber type are required' },
        { status: 400 }
      )
    }

    if (subscriberType === 'business' && !company) {
      return NextResponse.json(
        { error: 'Company name is required for business subscribers' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ 
        email, 
        name, 
        company,
        subscriber_type: subscriberType 
      }])

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'You are already subscribed!' },
          { status: 400 }
        )
      }
      throw error
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'An error occurred while subscribing' },
      { status: 500 }
    )
  }
}