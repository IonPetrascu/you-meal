import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type FetchProducts = Record<string, number>; //ключ и занчение строка

export const fetchProduct = createAsyncThunk<ProductItem[], FetchProducts>(
  'product/fetchProduct',
  async ({ categoryActive, currentPage, numberOfPages }) => {
    const { data } = await axios.get<ProductItem[]>(
      `https://65b11669d16d31d11bde08bc.mockapi.io/burgers?category=${categoryActive}&limit=${numberOfPages}&page=${currentPage}`,
    );
    return data;
  },
);

enum Status {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error',
}

type ProductItem = {
  idProduct: number;
  title: string;
  price: number;
  mass: number;
  description: string;
  compound: string[];
  category: number;
  imgUrl: string;
};

interface IProduct {
  items: ProductItem[];
  categoryActive: number;
  status: Status;
}

const initialState: IProduct = {
  items: [],
  categoryActive: 1,
  status: Status.LOADING,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.categoryActive = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action: PayloadAction<ProductItem[]>) => {
      state.items = action.payload;
      state.status = Status.SUCCES;
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { changeCategory } = productSlice.actions;

export default productSlice.reducer;
