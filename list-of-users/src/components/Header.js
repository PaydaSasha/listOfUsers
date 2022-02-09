import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import React from 'react';

export default function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Grid container>
                    <Grid item  >
                        <InputBase />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item  >
                        <IconButton>
                            <Badge badgeContent={9} color='secondary'>
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color='primary'>
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon />
                        </IconButton>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>
    )
}
