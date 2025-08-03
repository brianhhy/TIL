'use client';

import Link from "next/link";
import styled from "styled-components";

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = "primary", 
  className = "",
  style = {}
}) {
  if (href) {
    return (
      <Link href={href}>
        <StyledButton 
          className={className}
          $variant={variant}
          onClick={onClick}
          style={style}
        >
          {children}
        </StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton 
      className={className}
      $variant={variant}
      onClick={onClick}
      style={style}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background-color: #0070f3;
          color: white;
          &:hover {
            background-color: #0051cc;
          }
        `;
      case 'secondary':
        return `
          background-color: #f1f1f1;
          color: #333;
          border: 1px solid #ddd;
          &:hover {
            background-color: #e1e1e1;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: #0070f3;
          border: 2px solid #0070f3;
          &:hover {
            background-color: #0070f3;
            color: white;
          }
        `;
      default:
        return `
          background-color: #0070f3;
          color: white;
          &:hover {
            background-color: #0051cc;
          }
        `;
    }
  }}
`;