import Link from 'next/link';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { SiLinktree } from "react-icons/si";
import { siteMetadata } from '../metadata';
import SectionContainer from './section-container';

export default function Footer() {
  return (
    <SectionContainer>
      <footer>
        <div className="mb-0 flex flex-col justify-start space-y-1.5 space-x-0 py-10 text-gray-500 dark:text-gray-400">
          <div className="flex flex-col items-center space-y-2 text-sm sm:flex-row sm:justify-between sm:text-base">
            <ul className="flex space-x-2">
              <li>{`© ${new Date().getFullYear()}`}</li>
              <li>{` • `}</li>
              <li>
                <Link href="/">{siteMetadata.title}</Link>
              </li>
            </ul>
            <ul className="flex cursor-pointer items-center space-x-5">
              <li>
                <a
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <AiFillLinkedin className="sm:text-lg transition-transform hover:scale-110" />
                </a>
              </li>
              <li>
                <a href={siteMetadata.github} target="_blank" rel="noreferrer" aria-label="github">
                  <FaGithub className="sm:text-lg transition-transform hover:scale-110" />
                </a>
              </li>
              <li>
                <a href={siteMetadata.google} target="_blank" rel="noreferrer" aria-label="steam">
                  <FaGoogle className="sm:text-lg transition-transform hover:scale-110" />
                </a>
              </li>
              <li>
                <a
                  href={siteMetadata.linktree}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <SiLinktree className="sm:text-lg transition-transform hover:scale-110" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
