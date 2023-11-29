import React, { useRef, useContext } from "react";
import { TextField, Button, Box, Card, CardContent, CardHeader, Grid } from '@mui/material';
import { createPlant, getPlants } from "../api/plants";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from '../components/auth-context';
import { useQuery } from '@tanstack/react-query';
import PlantsList from "../components/PlantsList";
import { Typography } from '@mui/material';

// Functional component representing the admin page
const AdminPage = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const auth = useContext(AuthContext);

    // Mutation hook for creating a new plant
    const createPlantMutation = useMutation({
        mutationFn: createPlant,
        onSuccess: (data) => {
            console.log(data);
            // Refetch the plant data after successfully adding a new plant
            plantsQuery.refetch();
            // Reset the input fields to empty values on success
            nameRef.current.value = '';
            descriptionRef.current.value = '';
            priceRef.current.value = '';
            imageRef.current.value = '';
        },
        onError: (error) => {
            console.log(error)
        }
    });

    // Handler function for form submission
    const submitHandler = async event => {
        event.preventDefault();
        // Trigger the mutation to create a new plant
        createPlantMutation.mutate({
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
            image: imageRef.current.value,
            token: auth.token,
        })
    };

    // Query hook for fetching plant data
    const plantsQuery = useQuery({
        queryKey: ["plants"],
        queryFn: getPlants,
    });

    if (plantsQuery.isLoading) return "Loading...";

    if (plantsQuery.error) return "An error has occurred: " + plantsQuery.error.message;

    const plantsData = plantsQuery.data;

    // Rendering the admin page layout
    return (
        <Grid container spacing={3} sx={{ paddingTop: '20px' }}>
            <Grid item xs={12} md={6}>
                <Card>
                    <Typography sx={{ paddingTop: '20px', color: '#183c25', fontSize: '2em', letterSpacing: '2px' }}>
                        Add new plants/flowers
                    </Typography>
                    <CardContent>
                        {/* Form for adding a new plant */}
                        <form onSubmit={submitHandler}>
                            <Box>
                                <br />
                                <TextField
                                    id="name"
                                    label="Name"
                                    variant="outlined"
                                    multiline
                                    rows={1}
                                    sx={{ width: '100%' }}
                                    inputRef={nameRef}
                                />
                            </Box>
                            <Box>
                                <br />
                                <TextField
                                    id="description"
                                    label="Description"
                                    variant="outlined"
                                    multiline
                                    rows={5}
                                    sx={{ width: '100%' }}
                                    inputRef={descriptionRef}
                                />
                            </Box>
                            <Box>
                                <br />
                                <TextField
                                    id="image"
                                    label="Image link"
                                    variant="outlined"
                                    multiline
                                    rows={1}
                                    sx={{ width: '100%' }}
                                    inputRef={imageRef}
                                />
                            </Box>
                            <Box>
                                <br />
                                <TextField
                                    id="price"
                                    label="Price"
                                    variant="outlined"
                                    multiline
                                    rows={1}
                                    sx={{ width: '100%' }}
                                    inputRef={priceRef}
                                />
                            </Box>
                            <Box sx={{ marginTop: '20px' }} >
                                {/* Button for submitting the form */}
                                <Button type="submit" variant="contained" color="primary">
                                    Add Plant
                                </Button>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <div style={{ paddingTop: '20px' }}>
                            <Typography sx={{ color: '#183c25', fontSize: '2em', letterSpacing: '2px' }}>
                                Plants and flowers on the page
                            </Typography>
                            {/* Component for displaying the list of plants */}
                            <PlantsList plants={plantsData} />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default AdminPage;