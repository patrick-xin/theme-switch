import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { useHasMounted, useMultipleTheme } from "../hooks";
import { themes } from "../constants/theme";

const ThemeSwitchSelect = () => {
  const { theme, setTheme, currentTheme } = useMultipleTheme(themes);

  const hasMounted = useHasMounted();
  if (!hasMounted || !theme) return null;

  return (
    <div className="w-40">
      <Listbox
        value={theme}
        onChange={(theme) => {
          setTheme(theme);
        }}
      >
        <div className="relative border border-TextColor rounded-lg">
          <Listbox.Button className="relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 inline-flex gap-6 shadow-md">
            {currentTheme.emoji}
            <span>{currentTheme.title}</span>
          </Listbox.Button>
          <Listbox.Options className="absolute max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg border-t-0 border rounded-t-none border-TextColor">
            {themes.map((theme) => (
              <Listbox.Option
                key={theme.name}
                value={theme.name}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? "opacity-100" : "opacity-80"
                  }`
                }
              >
                {({ selected }) => (
                  <div className="inline-flex gap-4">
                    {theme.emoji}
                    <span
                      className={`block truncate ${
                        selected ? "font-bold" : "font-normal"
                      }`}
                    >
                      {theme.title}
                    </span>

                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default ThemeSwitchSelect;
