import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Helmet from '../components/Helmet/Helmet'
import CommenSection from '../components/ui/commen-section/CommenSection'
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select'

interface Country {
  name: string;
  flag: string;
  dialCode: string
}
const Checkout = () => {
  const [formdata, setFromData] =
    useState<{ username: string, email: string, phoneNumber: number | null, postalCode: number | null }>
      ({ username: "", email: "", phoneNumber: null, postalCode: null })

  const [countries, setCountries] = useState<Country[]>([]);
  const [countryPhone, setCountryPhone] = useState(0);
  const [dependency, setDependency] = useState(0);
  const [country, setCountry] = useState("")
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("")
  const selectCountries: { value: string, label: string }[] = countries.map((data) => { return ({ value: data.name, label: data.name }) })
  const selectCities: { value: string, label: string }[] = cities.map((data) => { return ({ value: data, label: data }) })

  // Define a memoized function for fetching the country list
  const fetchCountries = useMemo(() => async () => {
    try {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode');
      setCountries(response.data.data);
    } catch (error) {
      console.error('Error fetching country list:', error);
    }
  }, [dependency]);

  const fetchCities = useMemo(() => async (country: string) => {
    try {

      const response = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
        country: country
      });
      console.log(response.data.data)
      setCities(response.data.data);
    } catch (error) {
      console.error('Error fetching cities list:', error);
    }
  }, [dependency]);

  useEffect(() => {
    fetchCountries()

  }, [fetchCountries, fetchCities]);


  const submit = () => {
    let fullphoneNumber = "+" + countries[countryPhone].dialCode + formdata.phoneNumber;
    let data = { ...formdata, city: city, country: country, phoneNumber: fullphoneNumber }
    console.log(data)

  }
  const onChange = (e: any) => {
    const { name, value } = e.target;
    const newVal = value;

    setFromData({
      ...formdata,
      [name]: newVal
    });
  };

  return (
    <Helmet title='Checkout'>
      <>
        <ToastContainer />
        <CommenSection title="Checkout" />
        <div className='mx-auto max-w-screen-xl p-6 '>
          <h2 className='font-bold text-xl'>Shipping Address</h2>
          <div className="flex w-full md:w-1/2 flex-col gap-6  py-5 rounded">

            <Input crossOrigin="" variant="outlined" className='' name="username" value={formdata.username} type='text' label="Enter your name" onChange={onChange} />
            <Input crossOrigin="" variant="outlined" className='' name="email" value={formdata.email} type='email' label="Enter your email" onChange={onChange} />


            <div className="relative flex w-full max-w-full">
              <Menu placement="bottom-start">
                <MenuHandler>
                  <Button
                    ripple={false}
                    variant="text"
                    color="blue-gray"
                    className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                  >
                    <img
                      src={countries[countryPhone]?.flag || "https://billfish.org/wp-content/uploads/2019/08/placeholder-image.jpg"}
                      alt={countries[countryPhone]?.name}
                      className="h-4 w-4 rounded-full object-cover"
                    />
                    {countries[countryPhone]?.dialCode || 0}
                  </Button>
                </MenuHandler>
                <MenuList className="max-h-[20rem] max-w-full">
                  {countries.map(({ name, flag, dialCode }: Country, index) => {
                    if ((countries[index].hasOwnProperty('dialCode'))) {
                      return (
                        <MenuItem
                          key={name}
                          value={name}
                          className="flex items-center gap-2"
                          onClick={() => setCountryPhone(index)}
                        >
                          <img
                            src={flag || "https://billfish.org/wp-content/uploads/2019/08/placeholder-image.jpg"}
                            alt={name}
                            className="h-5 w-5 rounded-full object-cover"
                          />
                          {name} <span className="ml-auto">{dialCode || 0}</span>
                        </MenuItem>
                      );
                    }

                  })}
                </MenuList>
              </Menu>
              <Input
                crossOrigin=""
                type="number"
                value={formdata.phoneNumber!}
                onChange={onChange}
                name="phoneNumber"
                placeholder="Phone Number"
                className="rounded-l-none border-grey phone !border-t-blue-gray-200 focus:!border-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
              />
            </div>
            <Select options={selectCountries} placeholder='Select Country' onChange={(choice: any) => { setCity(""); setCountry(choice?.value); fetchCities(choice?.value) }} />
            <Select options={selectCities} placeholder='Select City' isDisabled={country === ''} onChange={(choice: any) => setCity(choice?.value)} />

            <Input crossOrigin="" variant="outlined" className=' ' name="postalCode" value={formdata.postalCode!} type='number' label="Postal Code" onChange={onChange} />
            <button className='bg-[#FB9C16] text-white text-nowrap rounded p-2 mt-2 w-max px-5' onClick={submit}>Payment</button>
          </div>
        </div>
      </>
    </Helmet>
  )
}

export default Checkout
