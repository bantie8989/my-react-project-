function Profile(){
    const imageUrl = "./src/assets/School.jpg"
    const handleClick = (e) =>{
        e.target.style.display= "none";
    }
    
    return( 
        <>
        <img src={imageUrl} onClick={(e) => handleClick(e)}/>
        <h1>dagmawid tewodrose primary school </h1></>
        
    );
}
export default Profile;