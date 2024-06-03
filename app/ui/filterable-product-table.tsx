'use client';

import { useState } from 'react';

type ProductItem = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};
const PRODUCTS: ProductItem[] = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (val: string) => void;
  onInStockOnlyChange: (val: boolean) => void;
}) {
  return (
    <div className="flex flex-col">
      <input
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label className="cursor-pointer">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {' only show product in stock'}
      </label>
    </div>
  );
}
function ProductTable({
  products,
  filterText,
  inStockOnly,
}: {
  products: ProductItem[];
  filterText: string;
  inStockOnly: boolean;
}) {
  const rows: any[] = [];
  let lastCategory: string | null = null;
  products.forEach((product) => {
    if (
      filterText &&
      product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <tr key={product.category}>
          <th colSpan={2}>{product.category}</th>
        </tr>,
      );
    }
    rows.push(
      <tr key={product.name}>
        <td>
          {product.stocked ? (
            product.name
          ) : (
            <span style={{ color: 'red' }}>{product.name}</span>
          )}
        </td>
        <td>{product.price}</td>
      </tr>,
    );
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
