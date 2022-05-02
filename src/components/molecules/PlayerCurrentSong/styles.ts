import styled, { css } from 'styled-components';
import { colors, fontSizes } from 'styles/variables';

type SaveSongButtonProps = {
  isAlreadySaved: boolean;
};

export const ContentInfo = styled.div`
  align-items: center;
  display: flex;
  width: 30%;
`;

export const PlaylistThumbnailContainer = styled.div`
  height: 56px;
  width: 56px;
`;

export const PlaylistThumbnail = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 14px;
`;

export const SongName = styled.a`
  color: ${colors.white};
  font-family: 'Circular Std Book', sans-serif;
  font-size: ${fontSizes.small};
  line-height: 1rem;
`;

export const Artist = styled.a`
  color: ${colors.grey};
  font-family: 'Circular Std Book', sans-serif;
  font-size: ${fontSizes.cap};
  line-height: 1rem;
`;

export const SaveSongButton = styled.button<SaveSongButtonProps>`
  ${({ isAlreadySaved }) => css`
    background: transparent;
    border: 0;
    color: ${isAlreadySaved ? colors.green : 'rgba(255,255,255,.7)'};
    padding: 8px;

    :hover {
      color: ${isAlreadySaved ? colors.green : colors.white};
    }
  `}
`;
