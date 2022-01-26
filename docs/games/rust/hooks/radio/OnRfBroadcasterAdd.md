---
hide_table_of_contents: true
---

# OnRfBroadcasterAdd

## Usage

* Called right before an object starts broadcasting an RF frequency
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnRfBroadcasterAdd(IRFObject obj, int frequency)
{
    Puts("OnRfBroadcasterAdd works!");
    return null;
}
```
