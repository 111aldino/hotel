

const UpdateRoomPage = async ({
  params

}: {

  params: Promise<{ id: string }>

}) => {

    const roomId = (await params).id
    if(!roomId) returnZ

  return(
      <div className=""></div>
  ) 
}

export default UpdateRoomPage;
