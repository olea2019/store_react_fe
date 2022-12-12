import { useState } from "react";
import { Data } from "./data";
import { History } from "./history";
import { LikedItems } from "./likedItems";

export const CabinetHeader = () => {
    const [tab, setTab] = useState('favourites');

    return <>
        <div className="cabinetHeader">
            <button onClick={() => setTab('personal')}>Datele Personale</button>
            <button onClick={() => setTab('favourites')}>Lista Favoritelor</button>
            <button onClick={() => setTab('history')}>Istoricul Cumparaturilor</button>
        </div>
        <div>
            {
                tab === 'personal' && <div> <Data/> </div>
            }
            {
                tab === 'favourites' && <div> <LikedItems /> </div>
            }
            {
                tab === 'history' && <div> <History /> </div>
            }
        </div>
    </>
}