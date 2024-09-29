import { InputLeftElement, Input, InputGroup, Spinner, Text } from "@chakra-ui/react";
import { RiUserSearchLine } from "react-icons/ri";
import { useState } from 'react';
import { apiV1 } from "../../../libs/api";

interface User {
    id: number;
    name: string;
}

export function SearchInput() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState<User[]>([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiV1.get<User[]>(`/search/users?q=${query}`);
            setResult(response.data); 
        } catch (err) {
            setError('An error occurred while fetching results.');
            console.log(err);
        }
        setLoading(false);
    }

    return (
        <>
            <InputGroup
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}>
                <InputLeftElement
                    left={'43px'}
                    fontSize={'20px'}
                    pointerEvents="none"
                    children={<RiUserSearchLine style={{ color: '#B2B2B2', backgroundColor: '#3F3F3F' }} />} />

                <Input
                    ms={'13px'}
                    type='search'
                    bg={'#3F3F3F'}
                    p={'18px 40px'}
                    width={'600px'}
                    height={'25px'}
                    fontSize={'14px'}
                    color={'home.text'}
                    fontWeight={'bold'}
                    borderRadius={'25px'}
                    border={'1px solid #3F3F3F'}
                    placeholder="Search your friend" 
                    onChange={(e) => setQuery(e.target.value)} />
                
                <button onClick={handleSearch}>Search</button>
            </InputGroup>

            {/* Display loading state */}
            {loading && <Spinner mt={4} />}

            {/* Display error message */}
            {error && <Text color="red.500" mt={4}>{error}</Text>}

            {/* Display search results */}
            {result.length > 0 && (
                <ul>
                    {result.map((user) => (
                        <li key={user.id}>{user.name}</li> 
                    ))}
                </ul>
            )}
        </>
    )
}
