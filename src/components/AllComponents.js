import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import React from 'react'

const AllComponents = () => (
    <Grid container>
        <Grid item>
            <Checkbox />
            <Button variant='contained'>Button</Button>
            <Radio />
            <Checkbox color='primary' />
            <Button variant='contained' color='primary'>Button</Button>
            <Radio color='primary' />
            <Checkbox color='secondary'/>
            <Button variant='contained' color='secondary'>Button</Button>
            <Radio color='secondary'/>
        </Grid>
    </Grid>
)

export default AllComponents