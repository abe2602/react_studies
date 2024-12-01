import React  from 'react';

function ProfilePicture() {
    const pictureUrl = "./src/assets/profilie_picture.png"

    const handleProfileClick = (e) => {
        console.log("KAMUI!!!")
        e.target.style.display = "none"
    }

    return (
        <img onClick={handleProfileClick} src={pictureUrl} width={200} height={200}></img>
    );
}

export default ProfilePicture