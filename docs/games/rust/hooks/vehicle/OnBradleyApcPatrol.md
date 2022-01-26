---
hide_table_of_contents: true
---

# OnBradleyApcPatrol

## Usage

* Called when an APC is starts patrolling
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnBradleyApcPatrol(BradleyAPC apc)
{
    Puts("OnBradleyApcPatrol works!");
    return null;
}
```
