import { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => {
        console.log('User data:', data);
        setUser(data.results[0])
      })
      .catch(error => {
        console.error('Error fetching user data:', error)
      })
  }, [])

  return (
    <div className="min-h-screen bg-[#f6f6f6] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full border-2 border-indigo-700 transition-all duration-300 hover:shadow-3xl hover:scale-105">
        <div className="flex flex-col sm:flex-row h-auto sm:h-96">
          <div className="sm:w-[35%] p-6 bg-gradient-to-br from-indigo-800 to-indigo-900">
            <div className="h-full w-full flex items-center justify-center">
              {user && (
                <img
                  src={user.picture.large}
                  alt="User profile"
                  className="w-48 h-48 object-cover rounded-full border-2 border-white shadow-lg"
                />
              )}
            </div>
          </div>
          
          <div className="sm:w-[65%] p-8 flex flex-col justify-center bg-indigo-150">
            {user && (
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-indigo-900">
                  {user.name.first} {user.name.last}
                </h2>
                <p className="text-xl text-indigo-700 capitalize font-semibold">{user.gender}</p>
                <p className="text-xl text-indigo-600 font-medium">{user.phone}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
