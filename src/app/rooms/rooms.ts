export interface Rooms{
    totalRooms : number,    
    availableRooms : number,
    bookedRooms : number
}

export type RoomList={
    roomType : string,
    amenities : string,
    price : number,
    checkinTime : Date;
    checkoutTime : Date
}