import styled from 'styled-components'
import { MdAddAPhoto } from 'react-icons/md'

export const Container = styled.label`
  input[type='file'] {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  font-weight: 600;
  font-size: 2.5rem;
  margin-top: 15px;
`

export const UploadPhotoIcon = styled(MdAddAPhoto)`
  height: 35px;
  width: 35px;
  fill: ${({ theme }) => theme.colors.primary};
  flex: 1 0;
`
export const ImagePreview = styled.img`
  height: auto;
  width: 80%;
  margin-top: 30px;
  margin-bottom: 70px;
  max-width: ${({ theme }) => theme.breakpoints.sm};
  max-height: ${({ theme }) => theme.breakpoints.sm};
`
