import Image from "next/image";

export function ProfileAvatar(){
    return (
        <div className="profile-row">
            <div className="avatar">
                <Image src="/me.png" alt="Кир" width={150} height={150} />
            </div>

            <div className="profile-main">
                <h1>Кир</h1>
                <p className="role">Frontend / Fullstack Developer</p>
            </div>
        </div>
    )
}