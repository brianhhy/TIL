"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { HashtagSection } from "@/components/Hashtag"
import { BookGrid } from "@/components/Post"

// Categorized tags
const timePeriods = ["past", "present", "future"]
const genres = ["crime", "mystery", "adventure", "fantasy", "romance", "sci-fi", "thriller", "historical", "literary"]
const moods = ["warm", "dark", "touching", "suspenseful", "uplifting", "melancholic", "humorous", "inspirational"]

// Sample book data
const books = [
  {
    id: 1,
    title: "The Silent Echo",
    content: "A detective hunts a serial killer in Victorian London, uncovering dark secrets along the way.",
    tags: ["past", "crime", "dark", "mystery"],
    author: "Eleanor Wright",
    year: "2023",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    title: "Beyond the Stars",
    content: "Colonists on a distant planet face an unknown threat that challenges their very existence.",
    tags: ["future", "sci-fi", "suspenseful", "adventure"],
    author: "Marcus Chen",
    year: "2024",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    title: "Whispers in the Garden",
    content: "A family reunion brings long-buried secrets to light in this contemporary drama.",
    tags: ["present", "literary", "touching", "melancholic"],
    author: "Sophia Johnson",
    year: "2022",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    title: "The Forgotten Kingdom",
    content: "A young orphan discovers her magical heritage and fights to reclaim her ancestral throne.",
    tags: ["past", "fantasy", "inspirational", "adventure"],
    author: "James Blackwood",
    year: "2023",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    title: "City of Shadows",
    content:
      "A journalist investigates corruption in her city and finds herself in the crosshairs of powerful enemies.",
    tags: ["present", "thriller", "dark", "mystery"],
    author: "Olivia Martinez",
    year: "2024",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    title: "Love in Bloom",
    content: "Two gardeners from rival families find unexpected romance during a prestigious flower competition.",
    tags: ["present", "romance", "warm", "humorous"],
    author: "Thomas Lee",
    year: "2022",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function BookCuratingSite() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState([])

  // Toggle tag selection
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  // Filter books based on search query and selected tags
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => book.tags.includes(tag))

    return matchesSearch && matchesTags
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Curator</h1>

      {/* Search Box */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search books by title, description, or author..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Hashtag Section Component */}
      <HashtagSection
        timePeriods={timePeriods}
        genres={genres}
        moods={moods}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
      />

      {/* Book Grid Component */}
      <BookGrid books={filteredBooks} toggleTag={toggleTag} />
    </div>
  )
}
