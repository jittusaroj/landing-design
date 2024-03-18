import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { Card, Box, CardContent, Container, Divider, Grid, List, ListItem } from '@mui/material';
import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import DataTable from './components/CustomTable';
import SplineChart from './components/Chart';
import DashboardChart from './components/DashboardChart';

function App() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Layout>
        <Container>
          <h4>HERE'S A SUMMARY OF KEY INSIGHTS ABOUT YOUR USAGE</h4>
          <Grid container spacing={3}>
            <Grid item xs="8">
              <Card className='mb-3'>
                <CardContent>
                  <Grid container>
                    <Grid item xs='8'>
                      <h5>ELECTRIC USAGE COMPARED TO OTHERS</h5>
                      <p>Your usage is lower than Similar homes around your area. keep doing your thing!</p>
                      <a href={"/"} className='text-decoration-none'>See why this is happening</a>
                    </Grid>
                    <Grid item xs='4'>
                      <DashboardChart />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card className='mb-3'>
                <CardContent>
                  <Grid container>
                    <Grid item xs='9'>
                      <h5>PROJECTED ELECTRIC BILL</h5>
                      <p>You are currently at $90.00 of your Electric bill forecast. Your Projected Next bill is going to be around $125 to $128.</p>
                      <a href={"/"} className='text-decoration-none'>Learn More</a>
                    </Grid>
                    <Grid item xs='3' className='d-flex align-items-center'>
                      <div className='text-center mb-0'>
                        <h4>ELECTRIC BILL</h4>
                        <h3>$90.00</h3>
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card className='mb-3'>
                <CardContent>
                  <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                      <Box className="mb-4">
                        <div className="d-flex justify-content-between">
                        <TabList onChange={handleChange} aria-label="" style={{borderBottom:0}}>
                          <Tab value={"1"} className={`tab-button ${value==="1"?'active-tab':''}`} icon={<InsertChartIcon />} aria-label="Graph view" />
                          <Tab value={"2"} className={`tab-button ${value==="2"?'active-tab':''}`} icon={<BackupTableIcon />} aria-label="Table view" />
                        </TabList>
<p className='mb-0'>Period: Dec 2018 TO Nov 2019</p>
                        </div>
                        
                      </Box>
                      <TabPanel value="1" style={{ padding: 0 }}>
                        <SplineChart />
                      </TabPanel>
                      <TabPanel value="2" style={{ padding: 0 }}>
                        <DataTable />
                      </TabPanel>
                    </TabContext>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs="4">
              <Card>
                <CardContent>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4> Your Home</h4>
                      <p>Account 41100387...</p>
                    </div>
                    <div>
                      <img src="./assets/images/home.jpg" alt="" />
                    </div>
                  </div>
                  <div className="content-list">
                    <List>
                      <ListItem className='w-100 justify-content-between'>
                        <p> Electric meter</p>
                        <p>23232323</p>
                      </ListItem>
                      <Divider />
                      <ListItem className='w-100 justify-content-between'>
                        <p> Water meter</p>
                        <p>911343676454</p>
                      </ListItem>
                      <Divider />
                      <ListItem className='w-100 justify-content-between'>
                        <p> Solar</p>
                        <p>LG Solar I 8 Panels</p>
                      </ListItem>
                      <Divider />
                      <ListItem className='w-100 justify-content-between'>
                        <p> Water</p>
                        <p>911343676454</p>
                      </ListItem>
                      <Divider />
                      <ListItem className='w-100 justify-content-between'>
                        <p> Battery</p>
                        <p>SunPower I Li-ion</p>
                      </ListItem>
                    </List>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Layout>

    </>
  );
}

export default App;
