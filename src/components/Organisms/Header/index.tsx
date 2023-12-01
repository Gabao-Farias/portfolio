import {
  DEFAULT_ABOUT_SECTION_ID,
  DEFAULT_CONTACTS_SECTION_ID,
  DEFAULT_PORTFOLIO_SECTION_ID,
  DEFAULT_RESUME_SECTION_ID,
  DEFAULT_SERVICES_SECTION_ID,
} from "@/utils";
import { FC } from "react";
import {
  Link,
  LinkItem,
  LinkText,
  LinksWrapper,
  LogoWrapper,
  Wrapper,
} from "./styles";

const defaultLinks = [
  {
    label: "About",
    href: `#${DEFAULT_ABOUT_SECTION_ID}`,
  },
  {
    label: "Services",
    href: `#${DEFAULT_SERVICES_SECTION_ID}`,
  },
  {
    label: "Portfolio",
    href: `#${DEFAULT_PORTFOLIO_SECTION_ID}`,
  },
  {
    label: "Resume",
    href: `#${DEFAULT_RESUME_SECTION_ID}`,
  },
  {
    label: "Contact",
    href: `#${DEFAULT_CONTACTS_SECTION_ID}`,
  },
];

type Props = {
  links?: {
    href: string;
    label: string;
  }[];
};

const Header: FC<Props> = ({ links = defaultLinks }) => {
  return (
    <Wrapper>
      <LogoWrapper></LogoWrapper>

      <LinksWrapper>
        {links.map(({ href, label }) => (
          <LinkItem key={href + label}>
            <Link href={href}>
              <LinkText>{label}</LinkText>
            </Link>
          </LinkItem>
        ))}
      </LinksWrapper>
    </Wrapper>
  );
};

export default Header;
