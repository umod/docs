---
hide_table_of_contents: true
---

# OnWildlifeTrap

## Usage

* Called when a wildlife trap is triggered by wildlife
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnWildlifeTrap(WildlifeTrap trap, TrappableWildlife wildlife)
{
    Puts("OnWildlifeTrap works!");
    return null;
}
```
