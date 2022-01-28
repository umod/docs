---
hide_table_of_contents: true
---

# OnSpinWheel

## Usage

* Called when the player spins a spinner wheel
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnSpinWheel(BasePlayer player, SpinnerWheel wheel)
{
    Puts("OnSpinWheel works!");
    return null;
}
```
