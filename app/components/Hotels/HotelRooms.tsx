"use client";

import { useState } from "react";
import { CheckCircle, Wifi, Tv, Wind } from "lucide-react";

interface Room {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  oldPrice: number;
  taxes: number;
  available: boolean;
}

interface SelectedRoom {
  id: number;
  name: string;
  price: number;
  taxes: number;
}

interface HotelRoomsProps {
  onRoomSelect: (room: SelectedRoom) => void;
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Classic",
    description: "Room size: 11 sqm approx",
    image: "/hotels/classic-room.jpg",
    price: 836,
    oldPrice: 4350,
    taxes: 143,
    available: true,
  },

  {
    id: 2,
    name: "Deluxe",
    description: "Room size: 12 sqm approx",
    image: "/hotels/deluxe-room.jpg",
    price: 921,
    oldPrice: 4004,
    taxes: 153,
    available: true,
  },

  {
    id: 3,
    name: "Saver Double",
    description: "Saver: Spaces with functional amenities",
    image: "/hotels/saver-room.jpg",
    price: 819,
    oldPrice: 4368,
    taxes: 140,
    available: true,
  },

  {
    id: 4,
    name: "Premium Room",
    description: "Spacious room with premium facilities",
    image: "/hotels/premium-room.jpg",
    price: 1250,
    oldPrice: 5200,
    taxes: 180,
    available: true,
  },
];

export default function HotelRooms({ onRoomSelect }: HotelRoomsProps) {
  const [selectedRoom, setSelectedRoom] = useState<number>(1);

  const handleSelectRoom = (room: Room) => {
    if (!room.available) {
      return;
    }

    setSelectedRoom(room.id);

    onRoomSelect({
      id: room.id,
      name: room.name,
      price: room.price,
      taxes: room.taxes,
    });
  };

  return (
    <div className="space-y-5">
      {rooms.map((room) => {
        const isSelected = selectedRoom === room.id;

        return (
          <div
            key={room.id}
            className={`overflow-hidden rounded-xl border bg-white transition ${
              isSelected ? "border-green-500 shadow-sm" : "border-stone-200"
            }`}
          >
            {/* SELECTED CATEGORY */}
            {isSelected && (
              <div className="flex items-center gap-2 bg-slate-500 px-4 py-2 text-sm font-bold text-white">
                ⭐ SELECTED CATEGORY
              </div>
            )}

            {/* ROOM TOP */}
            <div className="grid gap-5 p-5 md:grid-cols-[1fr_180px]">
              {/* LEFT */}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-stone-900">
                    {room.name}
                  </h3>

                  {isSelected && (
                    <CheckCircle
                      size={22}
                      className="fill-green-500 text-green-500"
                    />
                  )}
                </div>

                <p className="mt-3 text-sm text-stone-600">
                  {room.description}
                </p>

                {/* ROOM FEATURES */}
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

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-32 w-full rounded-lg object-cover"
                />

                {/* <div className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white">
                  📷
                </div> */}
              </div>
            </div>

            {/* PRICE SECTION */}
            <div className="border-t border-stone-200">
              <div className="grid md:grid-cols-[1fr_180px]">
                {/* PRICE */}
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-stone-900">
                      ₹{room.price.toLocaleString()}
                    </span>

                    <span className="text-sm text-stone-400 line-through">
                      ₹{room.oldPrice.toLocaleString()}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-stone-500">
                    + ₹{room.taxes.toLocaleString()} taxes & fee
                  </p>
                </div>

                {/* SELECT BUTTON */}
                <div className="flex items-center p-5">
                  <button
                    type="button"
                    disabled={!room.available}
                    onClick={() => handleSelectRoom(room)}
                    className={`w-full rounded-lg border px-4 py-3 text-sm font-bold transition ${
                      !room.available
                        ? "cursor-not-allowed border-stone-200 bg-stone-200 text-stone-400"
                        : isSelected
                          ? "border-green-500 text-stone-900"
                          : "border-stone-300 text-red-600 hover:border-blue-500 hover:text-blue-600"
                    }`}
                  >
                    {isSelected ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle
                          size={16}
                          className="fill-green-500 text-green-500"
                        />
                        SELECTED
                      </span>
                    ) : !room.available ? (
                      "SOLD OUT"
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
