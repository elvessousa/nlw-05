defmodule InmanaWeb.RestaurantsController do
  @moduledoc """
    Restaurant controller: 
      Manages insertion of new restaurant in the database
  """

  use InmanaWeb, :controller

  alias Inmana.Restaurant
  alias InmanaWeb.FallbackController

  action_fallback FallbackController
  
  def create(conn, params) do
    with {:ok, %Restaurant{} = restaurant} <- Inmana.create_restaurant(params) do
      conn
      |> put_status(:created)
      |> render("create.json", restaurant: restaurant)
    end
  end
end
