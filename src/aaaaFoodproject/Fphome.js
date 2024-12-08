import React, { useState } from 'react';
import styled from 'styled-components';  // Import styled-components

const Fphome = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <Logo>Foodie</Logo>
      </Header>

      {/* Search Bar Section */}
      <SearchBarContainer>
        <SearchBar
          type="text"
          placeholder="Search for your favorite food..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </SearchBarContainer>

      {/* Categories Section */}
      <CategoriesContainer>
        <SectionTitle>Browse by Categories</SectionTitle>
        <Categories>
          <CategoryCard>
            <CategoryImage src="pizza.jpg" alt="Pizza" />
            <CategoryTitle>Pizza</CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <CategoryImage src="burger.jpg" alt="Burgers" />
            <CategoryTitle>Burgers</CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <CategoryImage src="sushi.jpg" alt="Sushi" />
            <CategoryTitle>Sushi</CategoryTitle>
          </CategoryCard>
          <CategoryCard>
            <CategoryImage src="salad.jpg" alt="Salads" />
            <CategoryTitle>Salads</CategoryTitle>
          </CategoryCard>
        </Categories>
      </CategoriesContainer>

      {/* You can add Featured Section here later if needed */}
    </Container>
  );
};

// Styled-components
const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Header = styled.header`
  width: 100%;
  background-color: #ff6347;
  padding: 20px;
  text-align: center;
`;

const Logo = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

const SearchBarContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchBar = styled.input`
  width: 60%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
`;

const CategoriesContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const Categories = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const CategoryCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  width: 150px;
  cursor: pointer;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

const CategoryTitle = styled.h3`
  margin-top: 10px;
  color: #333;
`;

export default Fphome;