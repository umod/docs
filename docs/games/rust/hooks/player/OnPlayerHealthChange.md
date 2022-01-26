---
hide_table_of_contents: true
---

# OnPlayerHealthChange

## Usage

* Called just before the player's health changes
* Returning a non-null value cancels the health change

## Examples

```csharp title=""
object OnPlayerHealthChange(BasePlayer player, float oldValue, float newValue)
{
    Puts("OnPlayerHealthChange works!");
    return null;
}
```
