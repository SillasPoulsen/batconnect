function ProfilePage({ profile }) {
  return (
    <>
      <div>
        <img
          className="profile-picture"
          src={profile.image}
          alt="profilepicture"
        />
        <h3>{profile.Name}</h3>
        <p>Bio:{profile.bio}</p>
      </div>
    </>
  );
}

export default ProfilePage;
