import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className="language-switcher">
            <label htmlFor="language-select" className="sr-only">Select Language</label>
            <select
                id="language-select"
                onChange={changeLanguage}
                defaultValue={i18n.language}
                className="p-2 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
                <option value="en">English</option>
                <option value="ua">Українська</option>
            </select>
        </div>
    );
};


