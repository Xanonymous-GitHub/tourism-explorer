export interface TourismPicture {
    PictureUrl1?: string,
    PictureDescription1?: string,
    PictureUrl2?: string,
    PictureDescription2?: string,
    PictureUrl3?: string,
    PictureDescription3?: string
}

export interface PointType {
    PositionLat?: number,
    PositionLon?: number,
    GeoHash?: string
}

export interface ScenicSpotTourismInfo {
    ID: string,
    Name?: string,
    DescriptionDetail?: string,
    Description?: string,
    Phone?: string,
    Address?: string,
    ZipCode?: string,
    TravelInfo?: string,
    OpenTime?: string,
    Picture?: TourismPicture,
    MapUrl?: string,
    Position?: PointType,
    Class1?: string,
    Class2?: string,
    Class3?: string,
    Level?: string,
    WebsiteUrl?: string,
    ParkingInfo?: string,
    ParkingPosition?: PointType,
    TicketInfo?: string,
    Remarks?: string,
    Keyword?: string,
    City?: string,
    SrcUpdateTime: Date,
    UpdateTime: Date,
}