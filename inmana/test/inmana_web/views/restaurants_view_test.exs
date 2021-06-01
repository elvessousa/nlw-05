defmodule InmanaWeb.RestaurantsViewTest do
  use InmanaWeb.ConnCase
  import Phoenix.View
  alias Inmana.Restaurant
  alias InmanaWeb.RestaurantsView

  describe "render/2" do
    test "renders create.json" do
      params = %{name: "Teum", email: "teum@restaurant.com"}
      {:ok, restaurant} = Inmana.create_restaurant(params)

      response = render(RestaurantsView, "create.json", restaurant: restaurant)
      assert %{
        message: "Restaurant created.", 
        restaurant: %Restaurant{
          email: "teum@restaurant.com", 
          id: _id,
          name: "Teum",
        }
      } = response
    end
  end
  
end
