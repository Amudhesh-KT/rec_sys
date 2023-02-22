import React from 'react'
import { Grid, Card, Text } from "@nextui-org/react";

const ProductGrid = () => {
    const MockItem = ({ text }) => {
        return (
          <Card css={{ h: "$100", $$cardColor: '$colors$primary' ,height:240}}>
            <Card.Body>
              <Text h6 size={12} color="white" css={{ mt: 0 }}>
                {text}
              </Text>
            </Card.Body>
          </Card>
        );
    }
  return (
    <Grid.Container gap={2} justify="center">
    <Grid xs={2}>
      <MockItem text="1" />
    </Grid>
    <Grid xs={2}>
      <MockItem text="2" />
    </Grid>
    <Grid xs={2}>
      <MockItem text="3" />
    </Grid>
    <Grid xs={2}>
      <MockItem text="4" />
    </Grid>
    <Grid xs={2}>
      <MockItem text="5" />
    </Grid>
  </Grid.Container>
  )
}

export default ProductGrid