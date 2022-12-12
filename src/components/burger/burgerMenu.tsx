import './burgerMenu.scss';

interface Item {
    href: string;
    value: string;
}

interface Props {
    items: Item[];
    active: Boolean;
    setActive: any;
}

export const BurgerMenu = ({ items, active, setActive }: Props) => {
    return (
        <div className={active ? 'burger_menu active' : "burger_menu"} onClick={() => setActive(false)}>
            <div className="burger_menu__blur" />
            <div className="burger_menu__content" onClick={e => e.stopPropagation()}>
                <ul>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}