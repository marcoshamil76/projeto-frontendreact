import { FiltersContainer } from "./styled.filter"

function Filters(props){
    
    return  <FiltersContainer>
    
    <input
    placeholder="Buscar por nome"
    value={props.textFilter}
    onChange={(e)=>{props.setTextFilter(e.target.value)}}>
    </input>

    <input
    placeholder=" Valor Mínimo"
    type="number"
    value={props.minPrice}
    onChange={(e)=>{props.setMinPrice(e.target.value)}}>
    </input>

    <input
    placeholder=" Valor Máximo"
    type="number"
    value={props.maxPrice}
    onChange={(e)=>{props.setMaxPrice(e.target.value)}}>
    </input>
        <span>
            <label for="sortingParameter">Ordenar por: </label>

            <select
                name="sortingParameter"
                value={props.sortingParameter}
                onChange={(e)=>props.setSortingParameter(e.target.value)}
                >
                <option value={"title"}>Título</option>
                <option value={"price"}>Valor</option>
                <option value={"name"}>Nome</option>
                <option></option>
            </select>
            <select
                value={props.order}
                onChange={(e)=>props.setOrder(e.target.value)}
                >
                <option value={"asc"}>Crescente</option>
                <option value={"desc"}>Decrescente</option>
            </select>
        </span>

    </FiltersContainer>
       
    
}
export default Filters
