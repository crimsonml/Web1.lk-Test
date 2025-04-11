"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton, Icon, Switch } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes, display, style } from "@/app/resources";
import { person, home, about, blog } from "@/app/resources/content";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [isDarkMode, setIsDarkMode] = useState(style.theme === "dark");

  useEffect(() => {
    // Update theme on component mount and when theme changes
    const root = document.documentElement;
    root.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    
    // Save user preference to localStorage
    localStorage.setItem("theme-preference", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  
  // Check for saved user preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-preference");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <>      <Fade hide="s" fillWidth position="fixed" height="100" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="100" zIndex={9} /><Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="12"
        horizontal="center"
      >
        <Flex fillWidth horizontal="center">
          <Flex            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="8"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                  />
                </>              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith("/blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/blog"
                    selected={pathname.startsWith("/blog")}
                  />
                </>
              )}
              <Line vert maxHeight="24" />
              {/* Desktop dark mode toggle */}
              <Flex 
                gap="8" 
                horizontal="center" 
                vertical="center" 
                style={{ display: 'var(--display-s-hide, flex)' }}
              >
                <Icon name={isDarkMode ? "moon" : "sun"} size="s" onBackground="neutral-weak" />
                <Switch
                  isChecked={isDarkMode}
                  onToggle={toggleTheme}
                  ariaLabel="Toggle dark mode"
                />
              </Flex>
              
              {/* Mobile dark mode toggle - ensure visibility */}
              <Flex style={{ display: 'var(--display-s-show, none)' }}>
                <ToggleButton 
                  prefixIcon={isDarkMode ? "moon" : "sun"}
                  selected={false}
                  onClick={toggleTheme}
                  aria-label="Toggle dark mode"
                  style={{ 
                    opacity: 1,
                    visibility: 'visible',
                    display: 'flex'
                  }}
                />
              </Flex>
            </Flex>          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
