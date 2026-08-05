"use client";

import { useState } from "react";
import { Circle, Tv, Wifi, Wind } from "lucide-react";

export interface BackendRoom {
  roomName: string;
  price: number;
}

interface SelectedRoom {
  id: number;
  name: string;
  price: number;
  taxes: number;
}

interface HotelRoomsProps {
  rooms: BackendRoom[];
  onRoomSelect: (room: SelectedRoom) => void;
}

export default function HotelRooms({ rooms, onRoomSelect }: HotelRoomsProps) {
  const [selectedRoom, setSelectedRoom] = useState(0);

  const handleSelectRoom = (room: BackendRoom, index: number) => {
    setSelectedRoom(index);

    onRoomSelect({
      id: index + 1,
      name: room.roomName,
      price: Number(room.price),
      taxes: 0,
    });
  };

  if (!rooms || rooms.length === 0) {
    return (
      <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6 text-center text-stone-500">
        No rooms available for this hotel.
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-5">
      {rooms.map((room, index) => {
        const isSelected = selectedRoom === index;

        return (
          <div
            key={`${room.roomName}-${index}`}
            className={`overflow-hidden rounded-xl border bg-white transition ${
              isSelected ? "border-green-500 shadow-sm" : "border-stone-200"
            }`}
          >
            {isSelected && (
              <div className="flex items-center gap-2 bg-slate-500 px-4 py-2 text-sm font-bold text-white">
                ⭐ SELECTED CATEGORY
              </div>
            )}

            <div className="grid gap-5 p-5 md:grid-cols-[1fr_360px]">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-stone-900">
                    {room.roomName}
                  </h3>

                  {isSelected && (
                    <Circle
                      size={22}
                      className="fill-green-500 text-green-500"
                    />
                  )}
                </div>

                <p className="mt-3 text-sm text-stone-600">
                  Comfortable room with essential facilities.
                </p>

                <div className="mt-8 flex flex-wrap gap-6 text-sm text-stone-700">
                  <div className="flex items-center gap-2">
                    <Wind size={20} />
                    AC
                  </div>

                  <div className="flex items-center gap-2">
                    <Tv size={20} />
                    TV
                  </div>

                  <div className="flex items-center gap-2">
                    <Wifi size={20} />
                    Wi-Fi
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/hotels/hotelroom1.jpg"
                  alt={room.roomName}
                  className="h-56 w-full rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="border-t border-stone-200">
              <div className="grid md:grid-cols-[1fr_180px]">
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-stone-900">
                      ₹{Number(room.price).toLocaleString()}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-stone-500">+ taxes & fees</p>

                  <p className="mt-1 text-sm text-stone-500">Per Night</p>
                </div>

                <div className="flex items-center p-5">
                  <button
                    type="button"
                    onClick={() => handleSelectRoom(room, index)}
                    className={`w-full rounded-lg border px-4 py-3 text-sm font-bold transition ${
                      isSelected
                        ? "border-green-500 text-stone-900"
                        : "border-stone-300 text-red-600 hover:border-blue-500 hover:text-blue-600"
                    }`}
                  >
                    {isSelected ? (
                      <span className="flex items-center justify-center gap-2">
                        <Circle
                          size={16}
                          className="fill-green-500 text-green-500"
                        />
                        SELECTED
                      </span>
                    ) : (
                      "SELECT"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
