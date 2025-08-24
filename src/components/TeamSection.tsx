export default function TeamSection() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-14">
          Meet Our Team
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Our talented professionals who bring creativity, passion, and expertise
          to everything we do.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Team Member 1 */}
        <div className="w-72 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center text-center">
          <img
            className="h-24 w-24 rounded-full border-2 border-zinc-600"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
            alt="James Washington"
          />
          <h2 className="text-lg text-white mt-4 font-semibold">
            James Washington
          </h2>
          <p className="text-gray-400 text-sm">Content Marketing</p>
          <span className="bg-green-600/20 text-green-400 border border-green-600/30 text-xs px-3 py-1 mt-2 rounded-full">
            Admin
          </span>

          <div className="flex w-full divide-x divide-zinc-700 border-t border-zinc-700 mt-6">
            <button className="flex-1 py-3 flex items-center justify-center gap-2 text-gray-300 hover:text-white transition">
              📧 Email
            </button>
            <button className="flex-1 py-3 flex items-center justify-center gap-2 text-gray-300 hover:text-white transition">
              📞 Call
            </button>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="w-72 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center text-center">
          <img
            className="h-24 w-24 rounded-full border-2 border-zinc-600"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
            alt="Richard Nelson"
          />
          <h2 className="text-lg text-white mt-4 font-semibold">
            Richard Nelson
          </h2>
          <p className="text-gray-400 text-sm">Content Writer</p>
          <span className="bg-green-600/20 text-green-400 border border-green-600/30 text-xs px-3 py-1 mt-2 rounded-full">
            Admin
          </span>

          <div className="flex w-full divide-x divide-zinc-700 border-t border-zinc-700 mt-6">
            <button className="flex-1 py-3 flex items-center justify-center gap-2 text-gray-300 hover:text-white transition">
              📧 Email
            </button>
            <button className="flex-1 py-3 flex items-center justify-center gap-2 text-gray-300 hover:text-white transition">
              📞 Call
            </button>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="w-72 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center text-center">
          <img
            className="h-24 w-24 rounded-full border-2 border-zinc-600"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
            alt="Donald Jackman"
          />
          <h2 className="text-lg text-white mt-4 font-semibold">
            Donald Jackman
          </h2>
          <p className="text-gray-400 text-sm">Content Creator</p>
          <span className="bg-green-600/20 text-green-400 border border-green-600/30 text-xs px-3 py-1 mt-2 rounded-full">
            Admin
          </span>

          <div className="flex w-full divide-x divide-zinc-700 border-t border-zinc-700 mt-6">
            <button className="flex-1 py-3 flex items-center justify-center gap-2 text-gray-300 hover:text-white transition">
              📧 Email
            </button>
            <button className="flex-1 py-3 flex items-center justify-center gap-2 text-gray-300 hover:text-white transition">
              📞 Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
