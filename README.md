# Simple Crypto

<br> 



## Introduction


Simple Crypto is an app that allow users to search up wallet address to get an overview of the wallet transactions and asset holdings in the Ethereum blockchain. 
 
Interpreting blockchain data can be intimidating especially when users are new to Web3.

This app aims to meet three objectives: 
- Provide insightful wallet findings 
- Make data simple to understand and navigate
- Provide easy access points to external sources of information

<br>

## Wireframing 

<br>

## User Flow

There are 4 types of pages in total:

**Home page** 
- Search bar requires wallet address (eg. 0x...) to be directed to Wallet Transaction page

<br> 

**Wallet Transaction page** 
- An overview of transaction insights and data (Transactions, NFT and Crypto) 
- Sort and search options to filter data and page tracker to navigate
- Embedded links on transaction hash and wallet addresses that point to external sources and Transaction History page respectively

<br>

**Wallet Balance page** 
- An overview of wallet holdings (Crypto and NFT)
- Sort and search options to filter data and page tracker to navigate
- Access points on NFTs that link to respective images on Opensea marketplace 

<br>

**Transaction History page** 
- Breakdown of transaction flows with a specific address

<br> 

## Deployment
https://simplecrypto.vercel.app/

<br>

## Brief

This is a demo crypto wallet tracker created for project purposes. It is built using React (Javascript Library) and styled with Material UI library within one week project timeline.

<br>

## Further Development and Improvement

Future possible areas of improvement include:    

- Fix potential pagination and search bar bugs 
- Improve UXUI on responsiveness (eg. Menu, Overview, Pagination)
- Clean up and optimise coding

<br>

## Timeframe

1 week

<br>

## Technology Applied

- Javascript 
- React (Library)
- HTML
- CSS
- Material UI (Library)
- Github
- Vite

<br>

## Data Source 

Data are retrieved from two key sources of APIs: 
- Wallet transaction data fetched from Etherscan API
- Wallet holdings data fetched from Covalent API


<br> 

## Key Learning Points

<br>

1. Application of **array methods** (map, filter, some, reduce, forEach, sort, slice) to manipulate data and provide value to end users. 
<br>

One such example is multiselect checkbox filtering. 
<pre>
const handleSelectMethod = (event) => {
        setSearchParams({ page: 1 })
        const selectedMethodsArr = event.map((item) => item.key)
        const methodDataArr = Object.values(allTxMethodReplaceTable)
        const methodsToFilter = methodDataArr.filter((method) => selectedMethodsArr.some((select) => select === method.replace)).map(method => method.contain)

        if (methodsToFilter.length === 0) {
            updateWalletTx(defaultTx)

        } else {
            updateWalletTx(
                defaultTx.filter((tx) => methodsToFilter.some(
                    (methodType) => {
                        if (methodType !== allTxMethodReplaceTable.otherTransactions.contain) {
                            return (
                                tx.functionName === methodType ||
                                ((methodType !== allTxMethodReplaceTable.ethTransfer.contain) && tx.functionName.toLowerCase().includes(methodType))
                            )
                        } else if (methodType === allTxMethodReplaceTable.otherTransactions.contain) {
                            return (
                                groupMethod(tx.functionName) === methodType
                            )
                        }
                    }

                )))

        }
    }
</pre>

<br><br>

2. Create components, **pass props** and **lift state** as well as the application of **hooks** (useState, useEffect, useParams, useSearchParams, useNavigate). 

<br>

One example would be the utilisation of **useSearchParams and useState** hooks for pagination to track current page. 

<pre>
const [searchParams, setSearchParams] = useSearchParams(1);
    const [pageStart, setPageStart] = useState(0)

    const pageNum = Number(searchParams.get('page'))
</pre>

<br>

Another example is the utilisation of **useEffect** when fetching API. Data is also reorganised and filtered before setting to state. 

<pre>
useEffect(() => {
        fetch(nftBalUrl)
            .then((response) => response.json())
            .then((data) => {
                const nftData = data.data.items.filter((token) => token.type === 'nft')
                const conciseNftInfo = []
                nftData.forEach((token) => (
                    token.balance == 1 ?
                        conciseNftInfo.push({ ['name']: token.contract_name, ['data']: token.nft_data[0], ['contract_address']: token.contract_address }) :
                        token.nft_data.forEach((data) =>
                            conciseNftInfo.push({ ['name']: token.contract_name, ['data']: data, ['contract_address']: token.contract_address }))))

                const updateNames = conciseNftInfo.map((token) => {
                    if (token.name === null) {
                        return { ...token, name: 'Cannot be found' }
                    }
                    return token

                })

                setWalletNftBalance(updateNames)
                setDefaultBal(updateNames)

            })
    }, [])
</pre>
  
<br><br>
3. Experimenting Material UI library for CSS using **theme provider and grid layout** to style data. 

<pre>
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 650,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    palette: {
        primary: {
            main: '#286E5E',

        },
        secondary: {
            main: '#225559'
        },
    },
    shape: {
        borderRadius: 30
    },
    components: {
        MuiInputLabel: {
            defaultProps: {
                sx: {
                    fontSize: "0.75rem",
                    top: 2,
                },
            }
        },
        MuiButton: {
            defaultProps: {
                sx: {
                    fontSize: '0.7rem',
                    pt: '0.6rem',
                    pb: '0.6rem',
                }
            },
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {

                    },
                },
            ]
        },
        ...
</pre>



<br>


## Reflection

This project requires the application of array methods and familiarity of react ecosystem to effectively manage data and create functionalities. Project could have been better executed with a more detailed wire framing and planning. Would allocate more time to planning for future projects and also read up on React and MUI library to improve efficiency.

<br>

