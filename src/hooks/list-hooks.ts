import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ListRootState, ListDispatch } from "../store";

type ListPatchFunc = () => ListDispatch;
export const useListDispatch: ListPatchFunc = useDispatch;
export const useListSelector: TypedUseSelectorHook<ListRootState> = useSelector;
