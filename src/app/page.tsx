import Image from 'next/image'

export default function Home() {
  const overallStats = {
    totalMembers: 120,
    problemsSolved: 4500,
    averageRanking: 150,
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <section className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to the Cohort Statistics Dashboard
          </h1>
          <p className="text-gray-600">
            Explore the achievements and performance of our talented cohort members.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Overall Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded bg-white">
              <h3 className="text-lg font-semibold mb-2">Total Members</h3>
              <p>{overallStats.totalMembers}</p>
            </div>
            <div className="p-4 border rounded bg-white">
              <h3 className="text-lg font-semibold mb-2">Problems Solved</h3>
              <p>{overallStats.problemsSolved}</p>
            </div>
            <div className="p-4 border rounded bg-white">
              <h3 className="text-lg font-semibold mb-2">Average Ranking</h3>
              <p>{overallStats.averageRanking}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
