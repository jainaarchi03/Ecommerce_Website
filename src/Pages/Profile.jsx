// src/Pages/Profile.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("No user data found in Firestore.");
        }
      } else {
        console.log("No user logged in");
        navigate('/login');
      }
      setLoading(false);
    });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleUpdateProfile = async () => {
    if (userDetails) {
      try {
        const userRef = doc(db, "Users", auth.currentUser.uid);
        await setDoc(userRef, { ...userDetails, updatedAt: new Date() }, { merge: true });
        console.log("Profile updated successfully");
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          {userDetails ? (
            <>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                {userDetails.firstName} {userDetails.lastName}
              </h3>
              <div className="mb-6 text-center">
                <p className="text-lg text-gray-700 dark:text-gray-300">Email: {userDetails.email}</p>
                <p className="text-lg text-gray-700 dark:text-gray-300">First Name: {userDetails.firstName}</p>
                <p className="text-lg text-gray-700 dark:text-gray-300">Last Name: {userDetails.lastName}</p>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 transition-all duration-200"
                >
                  Logout
                </button>
                <button
                  onClick={handleUpdateProfile}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                  Update Profile
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-700 dark:text-gray-300">No user logged in</p>
          )}
        </div>
      </div>
  );
}

export default Profile;
