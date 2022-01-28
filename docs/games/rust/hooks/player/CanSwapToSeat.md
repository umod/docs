---
hide_table_of_contents: true
---

# CanSwapToSeat

## Usage

* Called when a player tries to switch seats, to determine whether each seat is eligible to be swapped to
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanSwapToSeat(BasePlayer player, BaseMountable mountable)
{
    Puts("CanSwapToSeat works!");
    return true;
}
```

```csharp title=""
bool CanSwapToSeat(BasePlayer player, ModularCarSeat catSeat)
{
    Puts("CanSwapToSeat works!");
    return true;
}
```