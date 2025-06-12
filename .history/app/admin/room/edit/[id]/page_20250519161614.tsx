

const UpdateRoomPage = async ({
  params

}: {

  params: Promise<{ id: string }>

}) => {

    const roomId = (await params).id
    if(!roomId) return

  return(
      <div className=""></div>
  ) 
}

export default UpdateRoomPage;
