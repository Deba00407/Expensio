import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import TextField from '@mui/material/TextField';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import InputAdornment from '@mui/material/InputAdornment';

const Input = ({
    type = 'text',
    hideAttr = false,
    name,
    label,
    register,
    ...props
}) => {
    const elementId = nanoid();
    const [hide, setHide] = useState(hideAttr);

    return (
        <TextField
            id={`${elementId}`}
            type={hide ? "password" : "text"}
            label={`${label}`}
            variant="outlined"
            required
            {...props}
            {...register}
            sx={{
                '&.dark .MuiInputBase-root': {
                    color: '#F8FAFC',
                },
                '&.dark .MuiInputLabel-root': {
                    color: '#F8FAFC',
                },
                '&.dark .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#F8FAFC',
                },
                '&.dark &:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#F8FAFC',
                },
                '&.dark &.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#F8FAFC',
                },
            }}
            className="dark:text-white w-[80%]"
            InputProps={{
                endAdornment: hideAttr ? (
                    <InputAdornment position="end">
                        {hide ? (
                            <IoEyeOutline
                                onClick={() => setHide(!hide)}
                                className="text-2xl cursor-pointer text-gray-500"
                            />
                        ) : (
                            <IoEyeOffOutline
                                onClick={() => setHide(!hide)}
                                className="text-2xl cursor-pointer text-gray-500"
                            />
                        )}
                    </InputAdornment>
                ) : null,
            }}
        />
    );
};

export default Input;
