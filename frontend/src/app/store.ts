export interface Store {
  location: string;
  address: string;
}

export interface StoreList {
  [id: number]: Store;
}
