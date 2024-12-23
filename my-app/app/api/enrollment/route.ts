import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    const { email, courseId, courseName } = await req.json()

    if (!email || !courseId || !courseName) {
      return NextResponse.json(
        { error: 'Email, courseId, and courseName are required' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('course_enrollments')
      .insert([{ 
        email,
        course_id: courseId,
        course_name: courseName,
        status: 'pending',
        enrolled_at: new Date().toISOString()
      }])

    if (error) {
      if (error.code === '23505') { // Unique constraint error
        return NextResponse.json(
          { error: 'You are already enrolled in this course!' },
          { status: 400 }
        )
      }
      throw error
    }

    return NextResponse.json(
      { message: 'Successfully enrolled!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Course enrollment error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your enrollment' },
      { status: 500 }
    )
  }
}