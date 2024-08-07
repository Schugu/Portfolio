import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select, { StylesConfig } from 'react-select';

interface OptionType {
  value: string;
  label: JSX.Element;
}

const ChangeLanguage = ({ tabIndex }: {tabIndex: number}) => {
  const { i18n, t } = useTranslation(['global']);

  const changeLanguage = (selectedOption: OptionType | null) => {
    if (selectedOption) {
      const selectedLanguage = selectedOption.value;
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem('language', selectedLanguage);
      setSelectedOption(selectedOption);
    }
  };

  const languageArrays = [
    { value: 'es', icon: 'w-7 h-7 icon-[openmoji--flag-argentina]' },
    { value: 'en', icon: 'w-7 h-7 icon-[openmoji--flag-united-states]' },
    { value: 'pt', icon: 'w-7 h-7 icon-[openmoji--flag-brazil]' }
  ];

  const options: OptionType[] = languageArrays.map(lang => ({
    value: lang.value,
    label: (
      <div className='flex justify-start items-center gap-1'>
        <p className='text-xl'>{lang.value.toUpperCase()}</p>
        <span className={`${lang.icon}`} />
      </div>
    )
  }));

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      color: "var(--color-text-first)",
      cursor: 'pointer',
      backgroundColor: "var(--color-background-first)",
      border: `2px solid ${state.isFocused ? 'var(--color-primary-first)' : 'transparent'}`,
      fontSize: '1.25rem',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: "var(--color-background-second)",
        border: "2px solid var(--color-primary-first)",
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--color-text-first)",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: "var(--color-text-first)"
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "var(--color-primary-first)" : "var(--color-text-first)",
      '&:hover': {
        color: "var(--color-primary-first)"
      }
    }),
    option: (provided, state) => ({
      ...provided,
      color: "var(--color-text-first)",
      cursor: 'pointer',
      backgroundColor: state.isFocused ? "var(--color-background-second)" : "transparent",
      '&:hover': {
        backgroundColor: "var(--color-background-second)",
      }
    }),
    menu: (provided) => ({
      ...provided,
      color: "var(--color-text-first)",
      backgroundColor: "var(--color-background-first)",
      borderRadius: '5px',
      boxShadow: '0 0 4px var(--color-primary-first)',
      cursor: 'pointer',
      border: "2px solid var(--color-primary-first)",
    }),
  };

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    options.find(option => option.value === i18n.language) || null
  );

  return (
    <Select
      styles={customStyles}
      options={options}
      value={selectedOption}
      onChange={changeLanguage}
      aria-label={t("global:navbar.selectLanguage")}
      className="w-fit"
      tabIndex={tabIndex}
      isSearchable={false}
    />
  );
};

export default ChangeLanguage;
