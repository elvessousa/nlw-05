defmodule Inmana.Restaurants.Create do
  @moduledoc """
    Create a restuarant in the database
  """
  alias Inmana.{Repo, Restaurant}

  def call(params) do 
    params
    |> Restaurant.changeset()
    |> Repo.insert()
    |> handle_insert()
  end

  defp handle_insert({:ok, %Restaurant{} = result}), do: result
  defp handle_insert({:error, result}) do
    {:error, %{result: result, status: :bad_request}}
  end
    
end