import { useState } from 'react';
import './burgerIcon.scss';
import { BurgerMenu } from './burgerMenu';

export const BurgerIcon = () => {
    const [menuActive, setMenuActive] = useState(false);
    const items = [
        { value: "Smartfoane", href: '/smartfoane' },
        { value: "Gadjeturi", href: '/gadjeturi' },
        { value: "Laptopuri si PC", href: '/laptopuri' },
        { value: "Tablete", href: '/tablete' },
        { value: "Accesorii", href: '/accesorii' },
        { value: "Televizoare", href: '/televizoare' },
        { value: "Electrocasnice", href: '/electrocasnice' },

    ]
    return (
        <div className="burger__btn" onClick={() => setMenuActive(!menuActive)}>
            <span>
                <BurgerMenu active={menuActive} setActive={setMenuActive} items={items} />
            </span>
        </div>
    )
}