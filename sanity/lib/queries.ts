import {defineQuery} from 'next-sanity'

export const courseListQuery = defineQuery(`
  *[_type == "course"] | order(title asc) {
    _id,
    title,
    slug,
    summary,
    price,
    level,
    popular,
    studentCount,
    coverImage,
    category->{_id, title, slug},
    instructor->{_id, name, slug, photo},
    modules[] {
      _key,
      title,
      summary,
      lessons[]->{
        _id,
        title,
        slug,
        duration,
        freePreview,
        studentCount,
        thumbnail,
        videoUrl
      }
    }
  }
`)

export const courseBySlugQuery = defineQuery(`
  *[_type == "course" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    summary,
    price,
    level,
    popular,
    studentCount,
    coverImage,
    category->{_id, title, slug},
    instructor->{_id, name, slug, photo, expertise, bio},
    learningOutcomes,
    modules[] {
      _key,
      title,
      summary,
      lessons[]->{
        _id,
        title,
        slug,
        duration,
        freePreview,
        studentCount,
        thumbnail,
        videoUrl,
        notes,
        keyPoints,
        proTip,
        resources,
      }
    }
  }
`)

export const instructorBySlugQuery = defineQuery(`
  *[_type == "instructor" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    photo,
    expertise,
    bio
  }
`)

export const instructorCoursesQuery = defineQuery(`
  *[_type == "course" && instructor._ref == $instructorId] | order(title asc) {
    _id,
    title,
    slug,
    summary,
    price,
    level,
    coverImage,
    category->{_id, title, slug},
    instructor->{_id, name, slug, photo},
  }
`)

export const categoryBySlugQuery = defineQuery(`
  *[_type == "category" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description
  }
`)

export const lessonBySlugQuery = defineQuery(`
  *[_type == "lesson" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    videoUrl,
    thumbnail,
    duration,
    freePreview,
    studentCount,
    notes,
    keyPoints,
    proTip,
    resources,
    "course": *[_type == "course" && references(^._id)] [0] {
      _id,
      title,
      slug,
      coverImage,
      category->{_id, title, slug},
      instructor->{_id, name, slug, photo}
    }
  }
`)
